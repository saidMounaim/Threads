import { Avatar, AvatarImage } from "@/components/ui/avatar";

const ThreadsCard = () => {
  return (
    <div className="flex w-full flex-col rounded-xl bg-slate-900 p-7">
      <div className="flex items-start gap-x-4">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-lg text-white font-bold">Said MOUNAIM</h2>
          <p className="text-md font-normal text-white">
            This is a test of the Threads app!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreadsCard;
