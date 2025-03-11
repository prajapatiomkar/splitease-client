import { CreateGroupDialog } from "@/components/CreateGroupDialog";
import GroupCard from "@/components/GroupCard";
import { useGetGroupsQuery } from "@/services/api";

export default function Dashboard() {
  const { data, isLoading, error } = useGetGroupsQuery({});

  return (
    <div className="p-4">
      <CreateGroupDialog />
      {isLoading && <p>Loading groups...</p>}
      {error && <p>Error loading groups</p>}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {data.map(
            (
              group: { _id: string; name: string; description: string },
              index: number
            ) => (
              <GroupCard
                key={group._id || index}
                data={{
                  name: group.name,
                  description: group.description,
                  _id: group._id,
                }}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
