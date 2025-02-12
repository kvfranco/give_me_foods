export default async function handleFormAction({request}: {request: Request}) {
  const formDataObject = await request.formData();
  const data = {
    name: formDataObject.get('name'),
    email: formDataObject.get('email'),
    message: formDataObject.get('message')
  }

  // Development Code ---------------------------------------------
  console.log(data);
  await new Promise<void>(resolve => setTimeout(resolve, 2000));
  return { message: "🎉 Got it! We'll get back to you soon.", success: true };

  // Production Code ----------------------------------------------
  /*
  const response = await fetch('https://' + window.location.host + '/form', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  const responseData = await response.json();
  if (!responseData.success || !response.ok) {
    return { message: "📩 Oops! We couldn't send your message. Try again in a moment." };
  }
  return { message: "🎉 Got it! We'll get back to you soon.", success: true };
  */
}