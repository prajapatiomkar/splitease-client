import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type GroupCardProps = {
  data: {
    name: string;
    description: string;
  };
};

export default function GroupCard({ data }: GroupCardProps) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="">{data.name}</CardTitle>
        <CardDescription className="">{data.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
