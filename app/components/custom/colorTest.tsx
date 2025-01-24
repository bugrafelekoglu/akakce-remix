import { FC } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";

export const ColorTest: FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Shadcn UI Renk Paleti</h1>

      {/* Ana Renkler */}
      <Card>
        <CardHeader>
          <CardTitle>Ana Renkler</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-20 bg-background border rounded-lg flex items-center justify-center">
                background
              </div>
              <div className="h-20 bg-foreground text-background border rounded-lg flex items-center justify-center">
                foreground
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-20 bg-primary text-primary-foreground border rounded-lg flex items-center justify-center">
                primary
              </div>
              <div className="h-20 bg-secondary text-secondary-foreground border rounded-lg flex items-center justify-center">
                secondary
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bileşen Renkleri */}
      <Card>
        <CardHeader>
          <CardTitle>Bileşen Renkleri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-20 bg-card text-card-foreground border rounded-lg flex items-center justify-center">
                card
              </div>
              <div className="h-20 bg-popover text-popover-foreground border rounded-lg flex items-center justify-center">
                popover
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-20 bg-muted text-muted-foreground border rounded-lg flex items-center justify-center">
                muted
              </div>
              <div className="h-20 bg-accent text-accent-foreground border rounded-lg flex items-center justify-center">
                accent
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Durum Renkleri */}
      <Card>
        <CardHeader>
          <CardTitle>Durum ve Form Renkleri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-20 bg-destructive text-destructive-foreground border rounded-lg flex items-center justify-center">
                destructive
              </div>
              <div className="h-20 border border-border rounded-lg flex items-center justify-center">
                border
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-20 border border-input rounded-lg flex items-center justify-center">
                input
              </div>
              <div className="h-20 border border-ring rounded-lg flex items-center justify-center">
                ring
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
