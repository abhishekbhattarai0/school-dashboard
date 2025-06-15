import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

 type AddStudentFormInputs = {
  firstname: string;
  lastname: string;
  middlename?: string;
  gender: "male" | "female" | "others" | undefined;
  dateOfBirth: string;
  studentId: string;
  photo?: any;

  phoneNumber: string;
  email: string;
  address: string;

  guardianName: string;
  gaurdianPhone: string;
  gaurdianEmail: string;

  currentGrade:
    | "Pre-K"
    | "Kindergarten"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;

  section: string;
  enrollmentDate: string;
  academicYear: string;
  previousSchool?: string;

  birthCertificate?: any;
  transferCertificate?: any;
  reportCards?: any;
  medicalDocuments?: any;
};

export const initialStudentForm: AddStudentFormInputs = {
  firstname: "",
  lastname: "",
  middlename: undefined,
  gender: undefined,
  dateOfBirth: "",
  studentId: "",
  photo: undefined,

  phoneNumber: "",
  email: "",
  address: "",

  guardianName: "",
  gaurdianPhone: "",
  gaurdianEmail: "",

  currentGrade: undefined,
  section: "",
  enrollmentDate: "",
  academicYear: "",
  previousSchool: undefined,

  birthCertificate: undefined,
  transferCertificate: undefined,
  reportCards: undefined,
  medicalDocuments: undefined,
};

type AddStudentState = AddStudentFormInputs & {
  setAddStudentData: (data: Partial<AddStudentFormInputs>) => void;
};

export const useAddStudentStore = create<AddStudentState>()(
  persist(
    (set) => ({
      ...initialStudentForm,
      setAddStudentData: (data) => {
        console.log(data)
        return(set((state) => ({ ...state, ...data })))},
    }),
    {
      name: "add-student-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
