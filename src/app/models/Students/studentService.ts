import AppError from "../../errorHelper/AppError";
import { CourseModel } from "../Teacher/TeacherModel";
import httpStatus from "http-status-codes";
import { Enrollment } from "./studentModel";


// View
const increaseCourseView = async (courseId: string) => {
  return await CourseModel.findByIdAndUpdate(
    courseId,
    { $inc: { views: 1 } },
    { new: true }
  );
};
// Like
const likeCourse = async (courseId: string) => {
  return await CourseModel.findByIdAndUpdate(
    courseId,
    { $inc: { likes: 1 } },
    { new: true }
  );
};
// Comment
const addCourseFeedback = async (courseId: string, feedback: string, studentId: string) => {
  const course = await CourseModel.findOne({ _id: courseId })
  if (!course) {
    throw new AppError(httpStatus.NOT_FOUND, "This course is not Available")
  }
  const feedbackObj = {
    student: studentId,
    comment: feedback,
    createdAt: new Date()
  };

  const updatedCourse = await CourseModel.findByIdAndUpdate(
    courseId,
    { $push: { feedbacks: feedbackObj } },
    { new: true }
  );

  return updatedCourse;
};
// analytics
const getCourseAnalytics = async (courseId: string) => {
  return await CourseModel.findById(courseId)
    .select("title views likes feedbacks")
    .lean();
};
// GetALL COURSE
const getAllCourses = async (searchTerm?: string, page = 1, limit = 10) => {
  const query: any = {};
  if (searchTerm) {
    query.title = { $regex: searchTerm, $options: "i" };
  }

  const courses = await CourseModel.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .populate("lessons");

  return courses;
};
// Enroll Student
const enrollCourse = async (studentId: string, courseId: string) => {
  return await Enrollment.findOneAndUpdate(
    { student: studentId, course: courseId },
    { student: studentId, course: courseId, isFollowing: true, lastAccessed: new Date() },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
};
// Lession Topic
const getCourseLessons = async (studentId: string, courseId: string) => {
  // Update lastAccessed automatically
  await Enrollment.findOneAndUpdate(
    { student: studentId, course: courseId },
    { lastAccessed: new Date() },
    { upsert: true, new: true }
  );

  const course = await CourseModel.findById(courseId)
    .populate({
      path: "lessons",
      populate: { path: "topics" }
    });

  if (!course) throw new Error("Course not found");

  return course;
};
export const studentServices = { increaseCourseView, likeCourse, addCourseFeedback, getCourseAnalytics, getAllCourses, enrollCourse, getCourseLessons }