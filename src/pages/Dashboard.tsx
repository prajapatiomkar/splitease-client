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
            (group: { id: string; name: string; description: string }) => (
              <GroupCard
                key={group.id}
                data={{ name: group.name, description: group.description }}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
