import NextAuth from "next-auth/next";
import { authConfig } from "@/configs/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { UserProps } from "../../user/user";

const handler = NextAuth(authConfig);

export{handler as GET, handler as POST }