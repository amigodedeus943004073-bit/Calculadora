import Calculator from '@/components/Calculator';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#0A0A0A]">
      <h1 className="text-3xl font-bold mb-8 text-[#E4E3E0]">Calculadora SMVM</h1>
      <Calculator />
    </main>
  );
}
