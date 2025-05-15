import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        Bạn có mở{' '}
        <Link
          href="/docs/gia-nghia"
          className="text-fd-foreground font-semibold underline"
        >
          Gia nghĩa resort
        </Link>{' '}
        và xem thông tin.
      </p>
    </main>
  );
}
