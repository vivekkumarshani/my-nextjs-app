export default function Contact(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log("Contact form submission", { name, email, message });
    res.status(200).json({
      success: true,
      message: "Thank you for your message.",
    });
  } else {
    res.status(405).json({
      success: false,
      message: "Message not allowed",
    });
  }
}
