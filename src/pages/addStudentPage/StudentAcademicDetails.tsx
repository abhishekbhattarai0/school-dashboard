import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { z } from 'zod'
import { StudentSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddStudentStore } from "@/store/addStudentStore";
import { useEffect } from "react";

const AcademicDetailsSchema = StudentSchema.pick({
  academicYear: true,
  previousSchool: true,
  birthCertificate: true,
  transferCertificate: true,
  reportCards: true,
  medicalDocuments: true,
});
type AcademicFormInput = z.infer<typeof AcademicDetailsSchema>;

export function StudentAcademicDetails() {
  const academicYear = useAddStudentStore( state => state.academicYear)
  const previousSchool = useAddStudentStore( state => state.previousSchool)

 const setAddStudentData = useAddStudentStore(state => state.setAddStudentData)
  const previousData = useAddStudentStore(state => state)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AcademicFormInput>({
    resolver: zodResolver(AcademicDetailsSchema),
    defaultValues: { academicYear, previousSchool}
  });

  const navigate = useNavigate()

  const onSubmit = (data: AcademicFormInput) => {
    console.log(" Data:", data);
    setAddStudentData({...previousData, ...data})
  };

  useEffect(()=> {
    if( !useAddStudentStore.persist.hasHydrated || ! academicYear || !previousData){
      navigate('/students/add-student/student-academic')
    }
  },[academicYear, previousSchool, useAddStudentStore.persist.hasHydrated])

  return (
    <div className="flex h-screen items-center justify-center">
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
              <Label htmlFor="academicYear" className="mb-1">Academic Year</Label>
              <Input type="string" id="academicYear" {...register("academicYear")} />
              {errors.academicYear && <p className="text-red-500 text-sm">{errors.academicYear.message}</p>}
            </div>
            <div>
              <Label htmlFor="previousSchool" className="mb-1">Previous School</Label>
              <Input id="previousSchool" {...register("previousSchool")} />
              {errors.previousSchool && <p className="text-red-500 text-sm">{errors.previousSchool.message}</p>}
            </div>
            <div>
              <Label htmlFor="birthCertificate" className="mb-1">Birth Certificate</Label>
              <Input id="birthCertificate" type="file" {...register("birthCertificate")} />
              {typeof errors.birthCertificate?.message === 'string' && <p className="text-red-500 text-sm">{errors.birthCertificate.message}</p>}
            </div>
            <div>
              <Label htmlFor="transferCertificate" className="mb-1">Transfer Certificate</Label>
              <Input id="transferCertificate" type="file" {...register("transferCertificate")} />
              {typeof errors.transferCertificate?.message === 'string' && <p className="text-red-500 text-sm">{errors.transferCertificate.message}</p>}
            </div>
            <div>
              <Label htmlFor="reportCards" className="mb-1">Report Cards</Label>
              <Input id="reportCards" type="file" {...register("reportCards")} />
              {typeof errors.reportCards?.message === 'string' && <p className="text-red-500 text-sm">{errors.reportCards.message}</p>}
            </div>
            <div>
              <Label htmlFor="medicalDocuments" className="mb-1">Medical Documents</Label>
              <Input id="medicalDocuments" type="file" {...register("medicalDocuments")} />
              {typeof errors.medicalDocuments?.message === 'string' && <p className="text-red-500 text-sm">{errors.medicalDocuments.message}</p>}
            </div>
            <div className="flex justify-between ">
              <Button onClick={()=>{navigate(-1)}}>Back</Button>
            <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </div>
  )
}
