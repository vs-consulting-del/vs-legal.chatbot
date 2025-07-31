import ChatWidget from "@/components/ChatWidget";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-semibold mb-4">Dobrodošli u VS Legal pravnog asistenta</h1>
      <p className="text-sm text-gray-600 mb-10">Kliknite na chat ispod da započnete razgovor.</p>
      <ChatWidget />
    </main>
  );
}
