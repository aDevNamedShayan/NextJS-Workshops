import { unstable_noStore } from 'next/cache';
import Messages from '@/components/messages';

// export const revalidate = 5 //seconds
// export const dynamic = 'force-dynamic' //cachimg options. force-dynamic = no-store, force-static = force-cache //is file wide

export default async function MessagesPage() {
  // unstable_noStore() //same are 'force-dynamic' and 'no-store' //is component / function wide
  const response = await fetch('http://localhost:8080/messages');
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
