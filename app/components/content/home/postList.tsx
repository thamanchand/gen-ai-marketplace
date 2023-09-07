import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/posts";

interface PostListProps {
  endPoint: string;
  pageSize: number;
}

const PostList = async ({ endPoint, pageSize }: PostListProps) => {
  return <>Post listing</>;
};

export default PostList;
