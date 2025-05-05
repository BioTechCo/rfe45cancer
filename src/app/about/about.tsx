"use client";

import React from "react";
import ImageGallery from "@/components/ImageGallery";

import "@/app/utils.css";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div
        style={{
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <h1 className="all-title">About RFE45Cancer Project</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4">
          RFE45Cancer is a comprehensive research initiative focused on
          analyzing DNA methylation patterns across multiple cancer types to
          identify epigenetic biomarkers with diagnostic and prognostic
          potential. Our project integrates data from both The Cancer Genome
          Atlas (TCGA) and Gene Expression Omnibus (GEO) to provide robust,
          cross-validated findings.
        </p>
        <p className="mb-4">
          Using advanced bioinformatics approaches and machine learning
          algorithms, particularly Recursive Feature Elimination (RFE), we
          identify gene signatures that can differentiate between cancer and
          normal tissues with high accuracy.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Methodology</h2>
        <ul>
          <div className="space-y-4">
            <div className="">
              <li>
                <h3 className="text-lg font-medium">Data Integration</h3>
                Combining multiple datasets from TCGA and GEO databases to
                ensure robust findings across diverse patient populations.
              </li>
            </div>

            <div className="">
              <li>
                <h3 className="">Methylation Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive preprocessing of methylation data using ChAMP
                  package, including quality control, normalization, and batch
                  effect correction.
                </p>
              </li>
            </div>

            <div className="">
              <li>
                <h3 className="">Feature Selection</h3>
                <p className="text-gray-600">
                  Application of Recursive Feature Elimination (RFE) to identify
                  the most predictive DNA methylation markers.
                </p>
              </li>
            </div>

            <div className="">
              <li>
                <h3 className="text-lg font-medium">Machine Learning</h3>
                <p className="text-gray-600">
                  Ensemble-based voting classifiers combining Random Forest,
                  SVM, and Gradient Boosting to improve classification stability
                  and accuracy.
                </p>
              </li>
            </div>

            <div className="">
              <li>
                <h3 className="text-lg font-medium">Validation</h3>
                <p className="text-gray-600">
                  Rigorous cross-validation techniques to ensure the
                  generalizability of our findings.
                </p>
              </li>
            </div>
          </div>
        </ul>

        <h2 className="text-lg font-medium">Project Process</h2>
        <div
          className=""
          style={{
            alignItems: "center",
            justifyItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <ImageGallery
            image="/proprocessing.png"
            title="Preprocessing Workflow"
            alt="Data preprocessing workflow diagram"
            height={500}
            width={600}
          />

          <ImageGallery
            image="/workflow.png"
            title="Analysis Workflow"
            alt="Analysis workflow diagram"
            height={500}
            width={600}
          />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Significance</h2>
        <p className="mb-4">
          DNA methylation alterations are crucial epigenetic changes in cancer
          development and progression. Our research aims to identify methylation
          signatures that can:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Serve as early diagnostic biomarkers for cancer detection</li>
          <li>Predict patient outcomes and treatment responses</li>
          <li>
            Provide insights into cancer biology and potential therapeutic
            targets
          </li>
          <li>
            Contribute to the development of non-invasive liquid biopsy
            approaches
          </li>
        </ul>
        <p>
          By focusing on consistent methylation patterns across multiple
          datasets, we enhance the reliability and clinical applicability of our
          findings.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact & Collaboration</h2>
        <p className="mb-4">
          We welcome collaboration opportunities with researchers interested in
          cancer epigenetics, bioinformatics, and translational medicine. Please
          reach out to discuss potential collaborative projects or access to our
          analysis pipelines.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://github.com/BioTechCo/main_project"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/github.png"
                alt="GitHub"
                style={{
                  height: "100px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
