
import { Types } from "mongoose";
import { Enrollment } from "../Students/studentModel";

// Follow a course
const followCourse = async (studentId: string, courseId: string) => {
  if (!courseId) throw new Error("courseId is required");

  return await Enrollment.findOneAndUpdate(
    { student: studentId, course: courseId },
    { student: studentId, course: courseId, isFollowing: true, lastAccessed: new Date() },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
};

const unfollowCourse = async (studentId: string, courseId: string) => {
  if (!courseId) throw new Error("courseId is required");

  return await Enrollment.findOneAndUpdate(
    { student: studentId, course: courseId },
    { isFollowing: false, lastAccessed: new Date() },
    { new: true }
  );
};




// Update progress (e.g., when student completes a lesson/topic)
const updateCourseProgress = async (
  studentId: string,
  courseId: string,
  progress: number
) => {
  return await Enrollment.findOneAndUpdate(
    { student: studentId, course: courseId },
    { progress, lastAccessed: new Date() },
    { new: true, upsert: true }
  );
};


const getCourseStudents = async (courseId: string) => {
  return await Enrollment.find({ course: courseId })
    .populate("student", "name email")
    .select("student isFollowing progress lastAccessed");
};


export const EnrollmentService = { getCourseStudents, updateCourseProgress, unfollowCourse, followCourse }