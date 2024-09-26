import SectionHeader from '@/components/SectionHeader';

type ProductInfoItemProps = {
  title: string;
  markdown: string;
  className?: string;
};

function ProductInfoItem({ title, markdown, className }: ProductInfoItemProps) {
  return (
    <div className={`${className} mb-10`}>
      <SectionHeader title={title} />
      <article className="prose lg:prose-xl text-justify" dangerouslySetInnerHTML={{ __html: markdown }} />
      <div className="text-justify">
        Ba chỉ bò (short plate) là phần thịt được lấy ở bụng con bò (tại cơ hoành), ngay dưới phần xương sườn. Ba chỉ có
        phần thịt nạc và mỡ xếp xen kẽ nhau, phần mỡ nhiều hơn một ít hoặc bằng phần thịt, nếu có thêm sụn ăn vào sẽ
        thấy vừa mềm vừa sần sật rất ngon. Thực chất, hàm lượng protein trong ba chỉ bò tốt cho việc tạo cơ và cung cấp
        nhiều dưỡng chất lành mạnh chứ không hề gây béo, cho nên những người đang trong chế độ giảm cân vẫn có thể sử
        dụng. Trong 100 gram thịt ba chỉ bò sẽ chứa 28 gram protein cùng nhiều Vitamin B6 và B12, kali, kẽm, magie, sắt.
        Axit amin trong thịt sẽ giúp tăng cường chuyển hóa và đốt cháy năng lượng trong thời gian ngắn. Khi ăn chúng ta
        sẽ cảm nhận được thịt mềm tan trong miệng, không hề dai và không chút ngấy. Bên cạnh đó, khoáng chất sắt trong
        thịt bò rất cần thiết trong việc bổ sung máu cho cơ thể. Theo khuyến cáo thì 300 - 500 gram một tuần là lượng
        thịt bò tiêu thụ hợp lý cho một người. Trên thị trường có rất nhiều loại thịt bò từ nhiều nước khác nhau, có
        loại đạt tiêu chuẩn nhập khẩu chất lượng cao, có loại không rõ nguồn gốc, kém chất lượng.
      </div>
    </div>
  );
}

export default ProductInfoItem;
