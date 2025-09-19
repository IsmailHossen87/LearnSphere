import { ITopic } from "./topicInterface";
import { TopicModel } from "./topicModel";
import AppError from "../../errorHelper/AppError";
import httpStatus from "http-status-codes";

// Create a new Topic
const createTopic = async (payload: Partial<ITopic>) => {
  if (!payload.lesson) {
    throw new AppError(httpStatus.BAD_REQUEST, "Lesson ID is required to create a topic");
  }

  const result = await TopicModel.create(payload);
  return result;
};

// Get all Topics by Lesson ID
const getTopicsByLesson = async (lessonId?: string) => {
  const filter: any = {};
  if (lessonId) {
    filter.lesson = lessonId;
  }
  const result = await TopicModel.find(filter).populate("lesson");
  return result;
};

// Get single Topic by ID
const getSingleTopic = async (id: string) => {
  const result = await TopicModel.findById(id).populate("lesson");
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Topic not found");
  }
  return result;
};

// Update Topic by ID
const updateTopic = async (id: string, payload: Partial<ITopic>) => {
  const result = await TopicModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Topic not found for update");
  }

  return result;
};

// Delete Topic by ID
const deleteTopic = async (id: string) => {
  const result = await TopicModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Topic not found for deletion");
  }
  return result;
};

export const TopicService = {
  createTopic,
  getTopicsByLesson,
  getSingleTopic,
  updateTopic,
  deleteTopic,
};
