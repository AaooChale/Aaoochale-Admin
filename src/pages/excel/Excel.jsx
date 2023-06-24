import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "@material-tailwind/react";
 const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    console.log(data, "Kishan");

    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
      <Button
        variant="contained"
        onClick={(e) => exportToCSV(apiData, fileName)}
        style={{
          backgroundColor:"#4ca346"
        }}
      >
        Export to Excel
      </Button>
      
  );
};

export default ExportToExcel