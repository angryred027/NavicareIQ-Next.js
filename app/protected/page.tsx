import ProtectedRoute from '@/modules/auth/ProtectedRoute';

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <div>Protected Content</div>
    </ProtectedRoute>
  );
} 