import { z } from "zod";

const ACCEPTED_IMAGE_TYPE: string[] = ["image/jpeg", "image/jpg", "image/png"];



export const StudentSchema = z.object({
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  middlename: z.string().optional(),
  gender: z.enum(["male", "female", "others"]),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format"
  }),
  studentId: z.string().min(4, "Student Id is required"),
  photo: z
    .any()
    .refine(
      (files) => ACCEPTED_IMAGE_TYPE.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png  formats are supported."
    ),

  // Contact and Address
  phoneNumber: z.string().min(10, "Phone number should be 10 digit long").max(10,"phone number must be 10 digit"),
  email: z.string().email(),
  address: z.string().min(10, "Address Invalid"),

  // Parent/Gaurdian Info
  guardianName: z.string().min(2, "Gaurdian name is required"),
  gaurdianPhone: z.string().min(10, "phone number must be 10 digit").max(10,"phone number must be 10 digit"),
  gaurdianEmail: z.string().email(),

  // Academic Info
  currentGrade: z.enum(["Pre-K", "Kindergarten", "1", "2", "3", "4", "5", "6",
    "7", "8", "9", "10", "11", "12"]),
  section: z.string().min(1),
  enrollmentDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid enrollment date",
  }),
  academicYear: z.string().regex(/^\d{4}-\d{4}$/, "Format must be YYYY-YYYY"),
  previousSchool: z.string().optional(),
  birthCertificate: z
    .any()
    .refine(
      (files) => files instanceof FileList ? files.length === 0 || files.length > 0 : true,
      { message: "Invalid file input" }
    )
    .optional(),

  transferCertificate: z
    .any()
    .refine(
      (files) => files instanceof FileList ? files.length === 0 || files.length > 0 : true,
      { message: "Invalid file input" }
    )
    .optional(),
  reportCards: z
    .any()
    .refine(
      (files) => files instanceof FileList ? files.length === 0 || files.length > 0 : true,
      { message: "Invalid file input" }
    )
    .optional(),
  medicalDocuments: z
    .any()
    .refine(
      (files) => files instanceof FileList ? files.length === 0 || files.length > 0 : true,
      { message: "Invalid file input" }
    )
    .optional(),



})

export type AddStudentFormInputs = z.infer<typeof StudentSchema>;
