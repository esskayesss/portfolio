import { SocialBar } from "@/components/social-bar";
import {CertListEntry} from "@/components/ui/certs";
import Link from "next/link";
import {HomepageExperienceSection} from "@/components/homepage/experience";
import {ProjectListEntry} from "@/components/ui/projects";
import {getXBlogPosts} from "@/lib/blog";
import {BlogCard} from "@/components/ui/blog/card";

export default async function Home() {
  const latest_articles = await getXBlogPosts(2);

  return (
    <main>
      <div className="section w-full">
        <div className="heading">
          <h1>Hi! I'm Saurabh Sharma. 👋🏼</h1>
        </div>
        <div className="content">
          <p>
            Hey! I'm Saurabh. I’m a final year CS student. I build things from scratch and peek behind abstractions. I'm
            obsessed with understanding how computers work at their lowest levels – both in silicon and software. You'll
            find me writing C and Zig, implementing protocols from scratch or tinkering with hardware. I value
            curiosity, first principles thinking, and getting my hands dirty with fundamentals. When I'm not coding
            close to the metal, I'm probably exploring new languages or rebuilding tools to figure out how they work.
          </p>
          <SocialBar />
        </div>
      </div>

      <div className="section">
        <div className="heading">
          <h1>Projects</h1>
          <Link href={'/projects'}>See All</Link>
        </div>
        <div className={'content'}>
          <ProjectListEntry
            title={'b64ed'}
            github={'esskayesss/b64ed'}
          >
            A simple base64 encoder and decoder implemented from scratch in c.
          </ProjectListEntry>
          <ProjectListEntry
            title={'clishae'}
            github={'esskayesss/clishae'}
          >
            CLIshae is a cURL-focussed multi-threaded pastebin server written from scratch in C. It has a complete implementation of HTTP/1.1 and uses system calls and low-level kernel calls.
          </ProjectListEntry>
        </div>
      </div>

      <div className="section">
        <h1>Currently</h1>
        <HomepageExperienceSection />
      </div>

      <div className="section">
        <div className="heading">
          <h1>latest articles</h1>
          <Link href={'/blog'}>See All</Link>
        </div>
        <div className="content">
          {latest_articles.length === 0 && <p>No articles yet.</p>}
          {latest_articles.map((article, _idx) => {
            return <BlogCard thumbnail={false} key={_idx} {...article} />
          })}
        </div>
      </div>

      <div className="section">
        <div className="heading">
          <h1>certifications and achievements</h1>
        </div>
        <div className={'content'}>
          <CertListEntry title={'C Programming with Linux'} issuer={'Coursera'} href={''}>
            The C Programming with Linux Specialization from IMT and Dartmouth, provides the skills to write, read
              and debug computer programs in the C programming language. This course also improved my familiarity with
              the linux operating system.
          </CertListEntry>
          <CertListEntry title={'Neural Networks and Deep Learning'} issuer={'Coursera'} href={''}>
            A foundational course on Neural Networks by <Link
              href={'https://deeplearning.ai'}>deeplearning.ai</Link>.
          </CertListEntry>
          <CertListEntry title={'Winner · Kavach Hackathon, 2023'} issuer={'Contest'} href={''}>
            Kavach is a cybersecurity hackathon organized by the Innovation Cell of the Ministry of Education, AICTE,
              in collaboration with the wings of the Ministry of Home Affairs - BPR&D and I4C.
          </CertListEntry>
          <CertListEntry title={'Winner · Smart India Hackathon, 2023'} issuer={'Contest'} href={''}>
            SIH is a national hackathon organized by AICTE, Innovation Cell of the Ministry of Education.
          </CertListEntry>
        </div>
      </div>
    </main>
  );
}
