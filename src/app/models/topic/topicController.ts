import { Request, Response } from "express";
import { TopicService } from "./topicService";
import httpStatus from "http-status-codes";


const createTopic = async (req: Request, res: Response) => {
  const result = await TopicService.createTopic(req.body);
  res.status(httpStatus.CREATED).json({
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Topic created successfully",
    data: result,
  });
};

const getTopicsByLesson = async (req: Request, res: Response) => {
  const { lessonId } = req.query;
  const result = await TopicService.getTopicsByLesson(lessonId as string);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Topics retrieved successfully",
    data: result,
  });
};

const getSingleTopic = async (req: Request, res: Response) => {
  const result = await TopicService.getSingleTopic(req.params.id);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Topic retrieved successfully",
    data: result,
  });
};

const updateTopic = async (req: Request, res: Response) => {
  const result = await TopicService.updateTopic(req.params.id, req.body);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Topic updated successfully",
    data: result,
  });
};

const deleteTopic = async (req: Request, res: Response) => {
  await TopicService.deleteTopic(req.params.id);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Topic deleted successfully",
    data: null,
  });
};

export const TopicController = {
  createTopic,
  getTopicsByLesson,
  getSingleTopic,
  updateTopic,
  deleteTopic,
};
