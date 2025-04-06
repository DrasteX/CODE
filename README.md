# How to Add a Chapter to the Website?
1. Pull this repo to your local dir
2. Go to `public/course/` and then to whichever language you want to add the chapter for
3. Next, create a `.mdx` file in that dir and follow this format : `langName-ChapterNum.mdx` when naming the file. For eg. `python-2.mdx` or `c++-4.mdx`
4. Add the Content for the chapter in the .mdx file (use this for formatting : [MDX Syntax](https://www.markdownguide.org/basic-syntax/))
5. Now, open the `src/CourseIndex.json` file and add an entry for the chapter in that file. The chapters not having an entry won't be displayed on the site.
That's it for adding a chapter to the website
