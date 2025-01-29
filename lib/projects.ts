import {ProjectMetadata} from "@/lib/types";

export const projects: Array<ProjectMetadata> = [
  {
    title: 'whatcook?',
    description: 'whatCook is your personal AI-Powered kitchen assistant designed to make meal planning effortless. The app helps you discver recipes based on the ingredients you already have at home— all you need to do, is snap a picture of your groceries and let WhatCook work its magic.',
    blog: undefined,
    website: 'https://whatcook.esskayesss.dev',
    github: 'esskayesss/whatcook'
  },
  {
    title: 'clishae',
    description: 'CLIshae is a cURL-focussed multi-threaded pastebin server written from scratch in C. It has a complete implementation of HTTP/1.1 and uses system calls and low-level kernel calls.',
    blog: undefined,
    website: undefined,
    github: 'esskayesss/clishae'
  },
  {
    title: 'b64ed',
    description: 'b64ed is a simple base64 encoder/decoder written from scratch in C.',
    blog: undefined,
    website: undefined,
    github: 'esskayesss/b64ed'
  },
  {
    title: 'yorumi',
    description: 'calming deep sea colorscheme for developers with 125 stars on github.',
    blog: undefined,
    website: 'https://yorumicolors.cc',
    github: 'yorumicolors/yorumi.nvim'
  }
]

const featured_project_titles: Array<string> = [
  'whatcook?', 'brainf*ck interpreter in c', 'clishae', 'b64ed', 'helmdall' 
];

export const featured_projects: Array<ProjectMetadata> = projects.filter((entry) => featured_project_titles.includes(entry.title))

