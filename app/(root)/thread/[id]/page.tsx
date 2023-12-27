import ThreadsCard from "@/app/components/ThreadsCard";
import prisma from "../../../utils/db";
import { IComments, ILikes, TUser } from "@/app/types/types";
import FormAddComment from "@/app/components/FormAddComment";
import CommentCard from "@/app/components/CommentCard";

async function getData(id: string) {
  const data = await prisma.thread.findUnique({
    where: { id },
    select: {
      id: true,
      description: true,
      createdAt: true,
      user: true,
      Likes: true,
      Comments: {
        select: {
          id: true,
          comment: true,
          userId: true,
          threadId: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
  });
  return data;
}

interface IThreadPage {
  params: {
    id: string;
  };
}

const ThreadPage = async ({ params }: IThreadPage) => {
  const id = params.id;

  const thread = await getData(id);

  return (
    <section className="max-w-4xl mt-20 flex flex-col gap-5 ml-16">
      <ThreadsCard
        key={thread?.id}
        id={thread?.id as string}
        description={thread?.description as string}
        createdAt={thread?.createdAt as Date}
        user={thread?.user as TUser}
        comments={thread?.Comments as IComments[]}
        likes={thread?.Likes as ILikes[]}
        hideComment={true}
      />

      <h2 className="text-white text-lg font-bold">
        {thread?.Comments.length} Comments
      </h2>

      <div className="flex flex-col gap-y-3 mt-4">
        {thread?.Comments.map((c) => (
          <CommentCard
            id={c.id}
            user={c.user}
            comment={c.comment}
            createdAt={c.createdAt}
          />
        ))}
      </div>

      <div className="flex flex-col mt-4 gap-y-3">
        <FormAddComment threadId={thread?.id as string} />
      </div>
    </section>
  );
};

export default ThreadPage;
