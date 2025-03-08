"use client";

import React, { useState } from "react";
import { Search, LayoutGrid, List, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FilterBar = ({
  setView,
  view = "list",
  showSearch,
  showFilter,
  showView,
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus
}) => {
  const [viewMode, setViewMode] = useState(view);

  const updateView = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
    setView(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <div className="flex flex-row sm:flex-col gap-4 mb-6">
      {showSearch && (
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      )}
      <div className="flex gap-2">
        {showFilter && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={filterStatus.includes("Active")}
                onCheckedChange={(checked) => {
                  setFilterStatus((prev) =>
                    checked
                      ? [...prev, "Active"]
                      : prev.filter((status) => status !== "Active")
                  );
                }}
              >
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus.includes("Inactive")}
                onCheckedChange={(checked) => {
                  setFilterStatus((prev) =>
                    checked
                      ? [...prev, "Inactive"]
                      : prev.filter((status) => status !== "Inactive")
                  );
                }}
              >
                Inactive
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {showView && (
          <Button variant="outline" onClick={updateView} className="flex gap-2">
            {viewMode === "grid" ? (
              <>
                <List className="h-4 w-4" />
                List
              </>
            ) : (
              <>
                <LayoutGrid className="h-4 w-4" />
                Grid
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default React.memo(FilterBar);
