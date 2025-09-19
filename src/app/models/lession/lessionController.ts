import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { LessonService } from "./lessionService";


const createLesson = async (req: Request, res: Response) => {
  const result = await LessonService.createLesson(req.body);
  res.status(httpStatus.CREATED).json({
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Lesson created successfully",
    data: result,
  });
};

const getLessons = async (req: Request, res: Response) => {
  const { courseId } = req.query;
  const result = await LessonService.getLessons(courseId as string);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Lessons retrieved successfully",
    data: result,
  });
};

const getSingleLesson = async (req: Request, res: Response) => {
  const result = await LessonService.getSingleLesson(req.params.id);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Lesson retrieved successfully",
    data: result,
  });
};

const updateLesson = async (req: Request, res: Response) => {
  const result = await LessonService.updateLesson(req.params.id, req.body);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Lesson updated successfully",
    data: result,
  });
};

const deleteLesson = async (req: Request, res: Response) => {
  await LessonService.deleteLesson(req.params.id);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Lesson deleted successfully",
    data: null,
  });
};

export const LessonController = {
  createLesson,
  getLessons,
  getSingleLesson,
  updateLesson,
  deleteLesson,
};
