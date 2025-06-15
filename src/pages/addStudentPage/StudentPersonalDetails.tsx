import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { z } from 'zod'
import { StudentSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAddStudentStore } from "@/store/addStudentStore";

const AcademicDetailsSchema = StudentSchema.pick({
  firstname: true,
  lastname: true,
  middlename: true,
  gender: true,
  dateOfBirth: true,
  studentId: true,
  photo: true
});
type AcademicFormInput = z.infer<typeof AcademicDetailsSchema>;

export function StudentPersonalDetails() {

  const firstname = useAddStudentStore((state) => state.firstname);
  const lastname = useAddStudentStore((state) => state.lastname);
  const middlename = useAddStudentStore((state) => state.middlename);
  const gender = useAddStudentStore((state) => state.gender);
  const dateOfBirth = useAddStudentStore((state) => state.dateOfBirth);
  const studentId = useAddStudentStore((state) => state.studentId);
  const photo = useAddStudentStore((state) => state.photo);

  const setAddStudentData = useAddStudentStore((state) => state.setAddStudentData);

  useEffect(() => {
    if (!useAddStudentStore.persist.hasHydrated) return;

    if ( !firstname || !lastname  || !gender || !dateOfBirth || !studentId || !photo  ) {
    navigate('/students/add-student/student-personal')
  }
}, [useAddStudentStore.persist.hasHydrated, firstname, lastname,gender,dateOfBirth,studentId,photo]);

const {
  register,
  handleSubmit,
  control,
  formState: { errors },
} = useForm<AcademicFormInput>({
  resolver: zodResolver(AcademicDetailsSchema),
  defaultValues: {firstname,middlename, lastname,gender,dateOfBirth,studentId,photo}
});

const navigate = useNavigate()

const onSubmit = (data: AcademicFormInput) => {
  setAddStudentData(data)
  console.log(" Data:", data);
  navigate('/students/add-student/student-contact')
};

return (
  <div className="flex h-screen items-center justify-center mt-20">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Student Personal Info </CardTitle>
        <CardDescription>
          Enter students personal details below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
          <div>
            <Label htmlFor="firstname" className="mb-1">First Name</Label>
            <Input id="firstname" {...register("firstname")} />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
          </div>

          <div>
            <Label htmlFor="middlename" className="mb-1">Middle Name</Label>
            <Input id="middlename" {...register("middlename")} />
            {errors.middlename && <p className="text-red-500 text-sm">{errors.middlename.message}</p>}
          </div>

          <div>
            <Label htmlFor="lastname" className="mb-1">Last Name</Label>
            <Input id="lastname" {...register("lastname")} />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
          </div>

          <div>
            <Label className="mb-1">Gender</Label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>

          <div>
            <Label htmlFor="dateOfBirth" className="mb-1">Date of Birth</Label>
            <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
            {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
          </div>

          <div>
            <Label htmlFor="studentId" className="mb-1">Student ID</Label>
            <Input id="studentId" {...register("studentId")} />
            {errors.studentId && <p className="text-red-500 text-sm">{errors.studentId.message}</p>}
          </div>

          <div>
            <Label htmlFor="photo" className="mb-1">Photo</Label>
            <Input id="photo" type="file" {...register("photo")} />
            {typeof errors.photo?.message === 'string' && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
          </div>

          <div className="flex justify-between ">
            <Button onClick={() => { navigate("/students", { replace: true }) }}>Back</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2" />
    </Card>
  </div>
)
}
