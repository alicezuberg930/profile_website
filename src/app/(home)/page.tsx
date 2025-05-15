import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Future Life</h1>
      <p className="text-fd-muted-foreground">
        Bạn có thể chọn vào từng Link và xem thông tin.{' '}
        <Link
          href="/docs/gia-nghia"
          className="text-fd-foreground font-semibold underline"
        >
          Gia nghĩa resort
        </Link>{' '}
      </p>
    </main>
  );
}
