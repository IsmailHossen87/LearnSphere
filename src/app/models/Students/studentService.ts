import AppError from "../../errorHelper/AppError";
import { CourseModel } from "../Teacher/TeacherModel";
import httpStatus from "http-status-codes";


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
    const course = await CourseModel.findOne({_id:courseId})
    if(!course){
        throw new AppError(httpStatus.NOT_FOUND,"This course is not Available")
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


export const studentServices ={increaseCourseView,likeCourse,addCourseFeedback,getCourseAnalytics}