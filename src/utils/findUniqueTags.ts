import { ICourse } from "@/interface/courses.interface";

export const findUniqueTags = (data: ICourse[]) => {
    return [...new Set(data.flatMap((course) => course.tags))]
}