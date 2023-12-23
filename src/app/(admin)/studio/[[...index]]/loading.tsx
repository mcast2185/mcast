'use client';

import {NextStudioLoading} from 'next-sanity/studio/loading';
import client from "../../../../../sanity.config";


export default function Loading() {
  return <NextStudioLoading config={client} />;
};
