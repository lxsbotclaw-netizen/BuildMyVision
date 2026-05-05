import {
  Activity,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  CreditCard,
  LayoutDashboard,
  Search,
  Settings,
  Users,
} from "lucide-react";

/** Statische Live-Demo: SaaS-Dashboard mit Sidebar, KPI-Karten, Chart und Tabelle */
export function SaasDashboardDemo() {
  return (
    <div className="grid grid-cols-[180px_1fr] bg-muted/30 font-sans text-foreground">
      {/* Sidebar */}
      <aside className="border-r border-border bg-background p-4">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand to-amber-400" />
          <span className="text-sm font-bold">Acme</span>
        </div>
        <nav className="space-y-0.5 text-sm">
          {[
            { label: "Dashboard", Icon: LayoutDashboard, active: true },
            { label: "Customers", Icon: Users },
            { label: "Reports", Icon: BarChart3 },
            { label: "Billing", Icon: CreditCard },
            { label: "Settings", Icon: Settings },
          ].map((item) => (
            <a
              key={item.label}
              className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors ${
                item.active
                  ? "bg-brand-soft font-semibold text-brand"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <item.Icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="p-5">
        {/* Topbar */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">
              Search customers, reports…
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-300 to-pink-400" />
          </div>
        </div>

        {/* KPI cards */}
        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { label: "Revenue", value: "€48.2k", trend: "+12.4%", up: true },
            { label: "Customers", value: "1,284", trend: "+5.2%", up: true },
            { label: "Conversion", value: "3.8%", trend: "-0.4%", up: false },
            { label: "Churn", value: "1.2%", trend: "-0.8%", up: true },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-border bg-background p-4"
            >
              <p className="text-xs text-muted-foreground">{kpi.label}</p>
              <p className="mt-2 text-xl font-bold">{kpi.value}</p>
              <p
                className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${
                  kpi.up ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                }`}
              >
                {kpi.up ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {kpi.trend}
              </p>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div className="mb-5 rounded-xl border border-border bg-background p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Revenue, last 30 days</p>
              <p className="text-xs text-muted-foreground">
                Trending up by 12.4%
              </p>
            </div>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex h-32 items-end gap-1.5">
            {[35, 50, 42, 65, 55, 70, 60, 78, 72, 85, 80, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-brand/70 to-brand"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border bg-background">
          <div className="border-b border-border px-4 py-3">
            <p className="text-sm font-semibold">Recent orders</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-2 font-medium">Customer</th>
                <th className="px-4 py-2 font-medium">Plan</th>
                <th className="px-4 py-2 font-medium">Amount</th>
                <th className="px-4 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { name: "Liam Brown", plan: "Pro", amount: "€79", status: "Paid" },
                { name: "Sophia Müller", plan: "Team", amount: "€199", status: "Paid" },
                { name: "Noah Fischer", plan: "Starter", amount: "€29", status: "Pending" },
                { name: "Emma Weber", plan: "Pro", amount: "€79", status: "Paid" },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="px-4 py-2.5">{row.name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    {row.plan}
                  </td>
                  <td className="px-4 py-2.5 font-medium">{row.amount}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        row.status === "Paid"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
