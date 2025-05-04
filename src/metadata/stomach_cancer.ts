import { PostData } from '@/types';

export const metadata: PostData = {
  title: 'RFE on Stomach Cancer Dataset',
  date: '2025-05-01',
  excerpt: 'Analysis of the Stomach Cancer dataset using Recursive Feature Elimination (RFE).',
  volcano_plot: '/stomach/vp_TCGA_STAD.png',
  pca1: '/stomach/planA/GDC_stomach_and_GSE99553/split80train/section_2/pca.html',
  pca2: '/stomach/planA/GSE85464/split80train/section_2/pca.html',
  joined_dbeta: '/stomach/planA/joined/section_2/dbeta_TSS_threshold_joined.csv',
  hc_ss: '/stomach/planA/joined/section_5/hierarchical_clustering_simple_sum.png',
  hc_ws: '/stomach/planA/joined/section_5/hierarchical_clustering_weighted_sum.png',
  hc_cs: '/stomach/planA/joined/section_5/hierarchical_clustering_consensus.png',
  hc_comp: '/stomach/planA/joined/section_5/hierarchical_clustering_compare.png',
  voting: '/stomach/planA/joined/split20test/section_6/Voting_metrics.csv',
  voting_avg: '/stomach/planA/joined/split20test/section_6/Voting_metrics_avg.csv',
};

export default metadata;
