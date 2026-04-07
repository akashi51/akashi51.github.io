export default function EmailPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
          3257765043@qq.com
        </h1>
        <p className="text-muted-foreground">
          这是 Mostima 的联系邮箱
        </p>
        <div className="pt-8">
          <a 
            href="/" 
            className="text-primary hover:underline font-medium"
          >
            ← 返回主页
          </a>
        </div>
      </div>
    </div>
  );
}
