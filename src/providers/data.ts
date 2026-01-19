import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";
import { Subject } from "@/types";

// Mock subject data
const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Fundamentals of programming, algorithms, and data structures for beginners.",
    createdAt: "2024-01-15T08:00:00Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Advanced calculus covering integration techniques, sequences, and series.",
    createdAt: "2024-01-16T09:30:00Z",
  },
  {
    id: 3,
    code: "PHYS301",
    name: "Quantum Mechanics",
    department: "Physics",
    description:
      "Introduction to quantum theory, wave functions, and Schrödinger equation.",
    createdAt: "2024-01-17T10:45:00Z",
  },
];

export const dataProvider: DataProvider = {
  // Implement data provider methods here
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },

  getOne: async () => {
    throw new Error("This function is not present in mock");
  },
  create: async () => {
    throw new Error("This function is not present in mock");
  },
  update: async () => {
    throw new Error("This function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock");
  },

  getApiUrl: () => "",
};
