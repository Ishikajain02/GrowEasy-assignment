import Image from 'next/image';
import path from 'path';
import fs from 'fs/promises';
import BannerImageComp from './components/BannerImageComp'

async function fetchAdData() {
  const filePath = path.join(process.cwd(), 'public', 'ads.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Home() {
  const data = await fetchAdData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-400 ">
      <h1>Ad Banners</h1>
      <div className="grid grid-cols-2 gap-6 w-[1107px]">
        {data.map(ad => (
             <BannerImageComp
             key={ad.id}
             title={ad.title}
             description={ad.description}
             cta={ad.cta}
             image={ad.image}
             background={ad.background}
             onEdit={() => handleEdit(ad.id)}
           />
        ))}
      </div>
    </main>
  );
}
