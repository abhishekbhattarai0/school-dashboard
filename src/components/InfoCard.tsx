import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InfoCardProps {
  title: string
  value: string | number

}

export function InfoCard({
  title,
  value,

}: InfoCardProps) {
  return (
    <Card className="bg-muted text-gray-900">
      <CardHeader >
        <CardTitle className="text-sm font-medium ">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold ">{value}</div>
      </CardContent>
    </Card>
  )
}
