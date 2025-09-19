import { ILesson } from "./lession.interface";
import { LessonModel } from "./lessionModel";


const createLesson = async (payload: ILesson) => {
  const result = await LessonModel.create(payload);
  return result;
};

const getLessons = async (courseId?: string) => {
  const filter = courseId ? { course: courseId } : {};
  const result = await LessonModel.find(filter)
    .populate("course")
    .populate("topics");
  return result;
};

const getSingleLesson = async (id: string) => {
  const result = await LessonModel.findById(id)
    .populate("course")
    .populate("topics");
  return result;
};

const updateLesson = async (id: string, payload: Partial<ILesson>) => {
  const result = await LessonModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteLesson = async (id: string) => {
  const result = await LessonModel.findByIdAndDelete(id);
  return result;
};

export const LessonService = {
  createLesson,
  getLessons,
  getSingleLesson,
  updateLesson,
  deleteLesson,
};
