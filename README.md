# Blockchain City · Web3 Neon Atlas

Thành phố Web3 Neon tương tác 3D và sơ đồ SVG dự phòng, với **1.000 thuật ngữ tiếng Việt trong 20 chủ đề**, popup (định nghĩa, ẩn dụ thành phố, thuật ngữ liên quan, tài liệu tham khảo), tìm kiếm không dấu, bộ lọc, cùng mô phỏng Ethereum / Bitcoin / Solana.

**Mở trang:** https://xulytiengviet.github.io/citychain/ (khi bật GitHub Pages)

## Tệp

- `index.html`: bản xây dựng **độc lập một tệp** để mở trực tiếp bằng trình duyệt.
- `glossary.json`: 1.000 thuật ngữ và 20 chủ đề, mỗi mục có `id,term,category,definition,metaphor,related`.
- `terms-source.txt`: bản gọn `Tên|Định nghĩa`, phân nhóm bằng `## id`.
- `assets/style.css`: thiết kế neon responsive.
- `assets/app.js`: UI, bộ lọc, popups, mô phỏng giao dịch.
- `assets/scene.js`: dựng Three.js 3D và tương tác công trình.
- `assets/fallback.js`: sơ đồ isometric SVG khi CDN không tải được.
- `index.template.html`: mẫu dùng dựng lại index.
- `tools/build.py`: dựng lại `index.html` từ các tệp trên.

## Sử dụng

- Kéo để xoay camera, cuộn để phóng to/thu nhỏ, click một tòa nhà để chọn chủ đề.
- Nhấn `/` để tìm kiếm, chọn mục để xem popup; nhấn `Esc` để đóng.
- Chọn Ethereum / Bitcoin / Solana ở thanh dưới để chạy mô phỏng sáu bước. Có tạm dừng, đặt lại, tốc độ.
- Nhấp từng chủ đề và xem thêm thuật ngữ theo trang 100 mục.

## Chỉnh sửa & build

Sửa trực tiếp `glossary.json` để cập nhật định nghĩa, ẩn dụ hoặc quan hệ; sửa các tệp `assets/*` để cập nhật giao diện. Sau đó chạy:

```bash
python tools/build.py
```

`terms-source.txt` là danh sách biên tập để tham khảo/kiểm tra, không tự đồng bộ vào JSON. Số lượng/chủ đề cần kiểm tra sau khi chỉnh sửa bằng cách đọc `glossary.json`.

## Phân biệt demo và blockchain thực

Toàn bộ số block, xe dữ liệu và giao dịch hiển thị là **giả lập**, không có kết nối RPC, ví, chữ ký hay tác vụ ghi on-chain. Ethereum, Bitcoin và Solana có cơ chế khác nhau. `SELFDESTRUCT` EVM sau EIP-6780 không xóa mã/storage trong đa số trường hợp.

**Nguồn nền:** [Ethereum blocks](https://ethereum.org/developers/docs/blocks/) · [Transactions](https://ethereum.org/developers/docs/transactions/) · [Gas](https://ethereum.org/developers/docs/gas/) · [Ethereum EIPs](https://eips.ethereum.org/) · [EIP-6780](https://eips.ethereum.org/EIPS/eip-6780) · [Solana Core](https://solana.com/docs/core) · [Bitcoin](https://developer.bitcoin.org/devguide/block_chain.html) · [IPFS](https://docs.ipfs.tech/concepts/).

Thư viện Three.js được tải từ CDN (giấy phép MIT). Trang tự chuyển sang sơ đồ 2D nếu tải thất bại.
