
import DashboardLayout from "@/components/admin/DashboardLayout";
import BlogForm from "@/components/admin/BlogForm";
import AllMoviesTable from "@/components/admin/AllMovies";
import MovieAnalytics from "@/components/admin/MovieAnalytics";

export default function AdminPage() {
  return (
    <DashboardLayout
      upload={<BlogForm />}
      all={<AllMoviesTable />}
      analyze={<MovieAnalytics />}
    />

  );
}