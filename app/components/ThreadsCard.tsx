import { Avatar, AvatarImage } from "@/components/ui/avatar";

type TUser = {
  id: string | null;
  name: string | null;
  image: string | null;
};

interface IThreadsCard {
  id: string;
  description: string;
  user: TUser;
  createdAt: Date;
}

const ThreadsCard = ({ id, description, user, createdAt }: IThreadsCard) => {
  return (
    <div className="flex w-full flex-col rounded-xl bg-slate-900 p-7" key={id}>
      <div className="flex items-start gap-x-4">
        <div className="flex items-center">
          <Avatar>
            {user?.image ? (
              <AvatarImage src={user?.image} />
            ) : (
              <AvatarImage src={"https://github.com/shadcn.png"} />
            )}
          </Avatar>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-lg text-white font-bold">{user?.name}</h2>
          <p className="text-md font-normal text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ThreadsCard;
