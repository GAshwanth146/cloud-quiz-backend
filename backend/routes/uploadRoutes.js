import express from 'express';
import multer from 'multer';
import { supabase } from '../supabaseClient.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// ✅ Upload file to Supabase storage
router.post('/', upload.single('file'), async (req, res) => {
  const file = req.file;
  const filePath = `quiz-assets/${Date.now()}_${file.originalname}`;

  const { data, error } = await supabase.storage
    .from('quiz-assets')
    .upload(filePath, file.buffer, { contentType: file.mimetype });

  if (error) return res.status(400).json({ error });

  const { data: publicUrl } = supabase.storage
    .from('quiz-assets')
    .getPublicUrl(filePath);

  res.json({ url: publicUrl.publicUrl });
});

export default router;
