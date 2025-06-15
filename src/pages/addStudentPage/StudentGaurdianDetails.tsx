import type { z } from "zod";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { StudentSchema } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAddStudentStore } from "@/store/addStudentStore";
import { useEffect } from "react";

const GaurdianDetailsSchema = StudentSchema.pick({
  guardianName: true,
  gaurdianPhone: true,
  gaurdianEmail: true,
})

type GaurdianDetailsFormInput = z.infer<typeof GaurdianDetailsSchema>

export function StudentGaurdianDetails() {
  const navigate = useNavigate()

  const guardianName = useAddStudentStore(state => state.guardianName);
  const gaurdianPhone = useAddStudentStore(state => state.gaurdianPhone);
  const gaurdianEmail = useAddStudentStore(state => state.gaurdianEmail);

  const setAddStudentData = useAddStudentStore(state => state.setAddStudentData)
  const previousData = useAddStudentStore(state => state)
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<GaurdianDetailsFormInput>({ 
    resolver: zodResolver(GaurdianDetailsSchema),
    defaultValues:{guardianName, gaurdianEmail, gaurdianPhone}
   })

  const onSubmit = (data: GaurdianDetailsFormInput) => {
    console.log("Contact data", data)
    setAddStudentData({...previousData,...data})
    navigate("/students/add-student/student-academic")
  }

  useEffect(()=>{
    if(!guardianName || !gaurdianPhone || !gaurdianEmail || !useAddStudentStore.persist.hasHydrated){
      navigate('/students/add-student/guardian-contact')
    }  

  },[useAddStudentStore.persist.hasHydrated, gaurdianEmail, gaurdianPhone, guardianName])

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Student Gaurdina Contact Info </CardTitle>
          <CardDescription>
            Enter student gaurdian contact details below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
            <div>
              <Label htmlFor="guardianName" className="mb-1">Guardian Name</Label>
              <Input type="text" id="guardianName" {...register("guardianName")} />
              {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName.message}</p>}
            </div>
            <div>
              <Label htmlFor="gaurdianPhone" className="mb-1">Gaurdian Phone</Label>
              <Input type="number" id="gaurdianPhone" {...register("gaurdianPhone")} />
              {errors.gaurdianPhone && <p className="text-red-500 text-sm">{errors.gaurdianPhone.message}</p>}
            </div>
            <div>
              <Label htmlFor="gaurdianEmail" className="mb-1">Gaurdian Email</Label>
              <Input id="gaurdianEmail" {...register("gaurdianEmail")} />
              {errors.gaurdianEmail && <p className="text-red-500 text-sm">{errors.gaurdianEmail.message}</p>}
            </div>
            <div className="flex justify-between ">
              <Button onClick={()=>{navigate(-1)}}>Back</Button>
            <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
