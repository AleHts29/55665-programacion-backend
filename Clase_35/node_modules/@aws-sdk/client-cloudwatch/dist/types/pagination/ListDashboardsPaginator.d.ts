import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDashboards(config: CloudWatchPaginationConfiguration, input: ListDashboardsCommandInput, ...additionalArguments: any): Paginator<ListDashboardsCommandOutput>;
