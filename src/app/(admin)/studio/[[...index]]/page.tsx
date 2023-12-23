'use client';

import { NextStudio } from "next-sanity/studio";
import client from '../../../../../sanity.config';




export default function StudioPage() {

  return <NextStudio config={client}/>;
};