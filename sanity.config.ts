import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash';

import { getDefaultDocumentNode } from './structure';
import { schemaTypes } from './schemas/schema';
import myTheme from './theme';
import StudioNavbar from '@/components/pageComponents/sanity/studioNavBar';
import Logo from '@/components/pageComponents/sanity/logo';
import { dataset } from '@/lib/sanity.client';
const projectId = String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export default defineConfig({
  basePath: "/studio",
  name: 'Portfolio',
  title: 'Mcast:Dev',
  projectId: String(projectId),
  dataset: String(dataset),
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
