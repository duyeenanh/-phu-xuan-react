import { useState, type FormEvent } from "react";
import type { DiaDanh } from "../types";

interface AttractionFormProps {
  onAdd: (diaDanh: DiaDanh) => void;
}

type FormErrors = Partial<
  Record<"title" | "category" | "description" | "imageUrl", string>
>;

export default function AttractionForm({ onAdd }: AttractionFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!title.trim()) nextErrors.title = "Vui lòng nhập tên địa điểm.";
    if (!category.trim()) nextErrors.category = "Vui lòng nhập danh mục.";
    if (!description.trim()) nextErrors.description = "Vui lòng nhập mô tả.";

    const trimmedImageUrl = imageUrl.trim();
    if (trimmedImageUrl) {
      try {
        const parsedUrl = new URL(trimmedImageUrl);
        if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
          nextErrors.imageUrl = "Đường dẫn ảnh phải bắt đầu bằng http hoặc https.";
        }
      } catch {
        nextErrors.imageUrl = "Vui lòng nhập đường dẫn ảnh hợp lệ.";
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onAdd({
      id: Date.now(),
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      imageUrl: trimmedImageUrl,
    });

    setTitle("");
    setCategory("");
    setDescription("");
    setImageUrl("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        margin: "20px 0",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Thêm địa điểm du lịch</h2>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="attraction-title">Tên địa điểm</label>
        <input
          id="attraction-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? "attraction-title-error" : undefined}
        />
        {errors.title && (
          <p id="attraction-title-error" role="alert" style={{ color: "red" }}>
            {errors.title}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="attraction-category">Danh mục</label>
        <input
          id="attraction-category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-invalid={Boolean(errors.category)}
          aria-describedby={
            errors.category ? "attraction-category-error" : undefined
          }
        />
        {errors.category && (
          <p
            id="attraction-category-error"
            role="alert"
            style={{ color: "red" }}
          >
            {errors.category}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="attraction-description">Mô tả</label>
        <textarea
          id="attraction-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "attraction-description-error" : undefined
          }
        />
        {errors.description && (
          <p
            id="attraction-description-error"
            role="alert"
            style={{ color: "red" }}
          >
            {errors.description}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="attraction-image-url">Đường dẫn ảnh (không bắt buộc)</label>
        <input
          id="attraction-image-url"
          type="url"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          aria-invalid={Boolean(errors.imageUrl)}
          aria-describedby={
            errors.imageUrl ? "attraction-image-url-error" : undefined
          }
        />
        {errors.imageUrl && (
          <p
            id="attraction-image-url-error"
            role="alert"
            style={{ color: "red" }}
          >
            {errors.imageUrl}
          </p>
        )}
      </div>

      <button type="submit">Thêm địa điểm</button>
    </form>
  );
}