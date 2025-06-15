import { z } from "zod";
import { Button } from "../../components/ui/button";
import { Card,  CardContent, CardDescription,  CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { StudentSchema } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAddStudentStore } from "@/store/addStudentStore";
import { useEffect } from "react";

const ContactDetailsSchema = StudentSchema.pick({
  phoneNumber: true,
  email: true,
  address: true,
})

type ContactFormInput = z.infer<typeof ContactDetailsSchema>;

export function StudentContactDetails() {

  const phoneNumber = useAddStudentStore( (state)=> state.phoneNumber)
  const email = useAddStudentStore( (state)=> state.email)
  const address = useAddStudentStore( (state)=> state.address)

  const setAddStudentData = useAddStudentStore((state) => state.setAddStudentData);
  const initialStudentData = useAddStudentStore((state) => state);


  useEffect(()=> {
    if(!useAddStudentStore.persist.hasHydrated) return;

    if(!phoneNumber ||!email ||!address ){
      navigate('/students/add-student/student-contact')
    }
  },[useAddStudentStore.persist.hasHydrated, phoneNumber, email, address])

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>({ 
      resolver: zodResolver(ContactDetailsSchema),
      defaultValues: { phoneNumber, email, address}
     })

  const onSubmit = (data: ContactFormInput) => {
    console.log("Contact data", data)
    setAddStudentData({...initialStudentData,...data});
    navigate("/students/add-student/guardian-contact")
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Student Contact Info </CardTitle>
          <CardDescription>
            Enter student contact details below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
            <div>
              <Label className="mb-1" htmlFor="phoneNumber">Phone</Label>
              <Input type="number" id="phoneNumber" {...register("phoneNumber")} />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <Label className="mb-1" htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <Label className="mb-1" htmlFor="address">Address</Label>
              <Input id="address" {...register("address")} />
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>
            <div className="flex justify-between ">
              <Button onClick={()=>{navigate('/students/add-student/student-personal')}}>Back</Button>
            <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
        
      </Card>
    </div>
  )
}
