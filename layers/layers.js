ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([601477.118712, 1210444.303286, 603854.628364, 1211663.884818]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_a0000004eGiaoThong_ToanTinh_1 = new ol.format.GeoJSON();
var features_a0000004eGiaoThong_ToanTinh_1 = format_a0000004eGiaoThong_ToanTinh_1.readFeatures(json_a0000004eGiaoThong_ToanTinh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_a0000004eGiaoThong_ToanTinh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a0000004eGiaoThong_ToanTinh_1.addFeatures(features_a0000004eGiaoThong_ToanTinh_1);
var lyr_a0000004eGiaoThong_ToanTinh_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_a0000004eGiaoThong_ToanTinh_1, 
                style: style_a0000004eGiaoThong_ToanTinh_1,
                popuplayertitle: 'a0000004e — GiaoThong_ToanTinh',
                interactive: false,
                title: '<img src="styles/legend/a0000004eGiaoThong_ToanTinh_1.png" /> a0000004e — GiaoThong_ToanTinh'
            });
var format_PhuLuc_BGD_2025_2 = new ol.format.GeoJSON();
var features_PhuLuc_BGD_2025_2 = format_PhuLuc_BGD_2025_2.readFeatures(json_PhuLuc_BGD_2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_PhuLuc_BGD_2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhuLuc_BGD_2025_2.addFeatures(features_PhuLuc_BGD_2025_2);
var lyr_PhuLuc_BGD_2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhuLuc_BGD_2025_2, 
                style: style_PhuLuc_BGD_2025_2,
                popuplayertitle: 'PhuLuc_BGD_2025',
                interactive: true,
                title: '<img src="styles/legend/PhuLuc_BGD_2025_2.png" /> PhuLuc_BGD_2025'
            });
var format_a00000050RanhHC_Xa_Polyline_3 = new ol.format.GeoJSON();
var features_a00000050RanhHC_Xa_Polyline_3 = format_a00000050RanhHC_Xa_Polyline_3.readFeatures(json_a00000050RanhHC_Xa_Polyline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_a00000050RanhHC_Xa_Polyline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a00000050RanhHC_Xa_Polyline_3.addFeatures(features_a00000050RanhHC_Xa_Polyline_3);
var lyr_a00000050RanhHC_Xa_Polyline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_a00000050RanhHC_Xa_Polyline_3, 
                style: style_a00000050RanhHC_Xa_Polyline_3,
                popuplayertitle: 'a00000050 — RanhHC_Xa_Polyline',
                interactive: false,
                title: '<img src="styles/legend/a00000050RanhHC_Xa_Polyline_3.png" /> a00000050 — RanhHC_Xa_Polyline'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_a0000004eGiaoThong_ToanTinh_1.setVisible(true);lyr_PhuLuc_BGD_2025_2.setVisible(true);lyr_a00000050RanhHC_Xa_Polyline_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_a0000004eGiaoThong_ToanTinh_1,lyr_PhuLuc_BGD_2025_2,lyr_a00000050RanhHC_Xa_Polyline_3];
lyr_a0000004eGiaoThong_ToanTinh_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UUID': 'UUID', 'ThoiDiemBatDau': 'Thời điểm bắt đầu', 'ThoiDiemKetThuc': 'Thời điểm kết thúc', 'MaXa': 'Mã hành chính xã', 'MaDoiTuong': 'Mã đối tượng', 'SoHieuToBanDo': 'Số hiệu tờ bản đồ', 'SoThuTuThua': 'Số thửa', 'SoHieuToBanDoCu': 'Tờ bản đồ cũ', 'SoThuTuThuaCu': 'Thửa cũ', 'DienTich': 'Diện tích', 'DienTichPhapLy': 'Diện tích pháp lý', 'KyHieuMucDichSuDung': 'Ký hiệu mục đích sử dụng', 'KyHieuDoiTuong': 'Ký hiệu đối tượng chủ', 'TenChu': 'Tên chủ', 'DiaChi': 'Địa chỉ', 'DaCapGCN': 'Đã cấp GCN', 'BGD_2023': 'BGD_2023', 'TenDuong': 'TenDuong', 'MaLoaiDuong': 'MaLoaiDuong', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PhuLuc_BGD_2025_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BGD_2023': 'BGD_2023', 'TenDuong': 'TenDuong', 'Huyen': 'Huyen', 'LoaiDuong': 'LoaiDuong', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Code': 'Mã nhận diện', 'TenDuong_BGD': 'TenDuong_BGD', 'DiemDau': 'DiemDau', 'DiemCuoi': 'DiemCuoi', 'STTDoan': 'STTDoan', });
lyr_a00000050RanhHC_Xa_Polyline_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MaNhanDang': 'Mã nhận dạng loại', 'Shape_Leng': 'Shape_Leng', 'GhiChu': 'Ghi chú', 'DonViQuanLy': 'Đơn vị quản lý', 'DonViCapNhat': 'Đơn vị cập nhật', 'MaDoiTuong': 'Mã đối tượng', 'MaDonViHanhChinh': 'Mã đơn vị hành chính', 'DanhTuChung': 'Danh từ chung', 'DiaDanh': 'Địa danh', 'DoiTuong': 'Đối tượng', 'NgayThuNhan': 'Ngày thu nhận', 'NgayCapNhat': 'Ngày cập nhật', 'DienTich': 'Diện tích', 'TenXa': 'Tên phường xã', 'TenHuyen': 'Tên quận huyện', 'CheckTool': 'CheckTool', 'MaPhuongXa': 'Mã phường xã', 'MaHuyenTP': 'Mã huyện thành phố', 'SHAPE_Length': 'SHAPE_Length', });
lyr_a0000004eGiaoThong_ToanTinh_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'UUID': 'TextEdit', 'ThoiDiemBatDau': 'DateTime', 'ThoiDiemKetThuc': 'DateTime', 'MaXa': 'TextEdit', 'MaDoiTuong': 'TextEdit', 'SoHieuToBanDo': 'Range', 'SoThuTuThua': 'Range', 'SoHieuToBanDoCu': 'TextEdit', 'SoThuTuThuaCu': 'TextEdit', 'DienTich': 'TextEdit', 'DienTichPhapLy': 'TextEdit', 'KyHieuMucDichSuDung': 'TextEdit', 'KyHieuDoiTuong': 'TextEdit', 'TenChu': 'TextEdit', 'DiaChi': 'TextEdit', 'DaCapGCN': 'Range', 'BGD_2023': 'Range', 'TenDuong': 'TextEdit', 'MaLoaiDuong': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PhuLuc_BGD_2025_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'BGD_2023': 'Range', 'TenDuong': 'TextEdit', 'Huyen': 'TextEdit', 'LoaiDuong': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Code': 'TextEdit', 'TenDuong_BGD': 'TextEdit', 'DiemDau': 'TextEdit', 'DiemCuoi': 'TextEdit', 'STTDoan': 'TextEdit', });
lyr_a00000050RanhHC_Xa_Polyline_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'MaNhanDang': 'TextEdit', 'Shape_Leng': 'TextEdit', 'GhiChu': 'TextEdit', 'DonViQuanLy': 'Range', 'DonViCapNhat': 'Range', 'MaDoiTuong': 'TextEdit', 'MaDonViHanhChinh': 'TextEdit', 'DanhTuChung': 'TextEdit', 'DiaDanh': 'TextEdit', 'DoiTuong': 'TextEdit', 'NgayThuNhan': 'DateTime', 'NgayCapNhat': 'DateTime', 'DienTich': 'TextEdit', 'TenXa': 'TextEdit', 'TenHuyen': 'TextEdit', 'CheckTool': 'TextEdit', 'MaPhuongXa': 'TextEdit', 'MaHuyenTP': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_a0000004eGiaoThong_ToanTinh_1.set('fieldLabels', {'OBJECTID': 'no label', 'UUID': 'no label', 'ThoiDiemBatDau': 'no label', 'ThoiDiemKetThuc': 'no label', 'MaXa': 'no label', 'MaDoiTuong': 'no label', 'SoHieuToBanDo': 'no label', 'SoThuTuThua': 'no label', 'SoHieuToBanDoCu': 'no label', 'SoThuTuThuaCu': 'no label', 'DienTich': 'no label', 'DienTichPhapLy': 'no label', 'KyHieuMucDichSuDung': 'no label', 'KyHieuDoiTuong': 'no label', 'TenChu': 'no label', 'DiaChi': 'no label', 'DaCapGCN': 'no label', 'BGD_2023': 'no label', 'TenDuong': 'no label', 'MaLoaiDuong': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_PhuLuc_BGD_2025_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'BGD_2023': 'header label - always visible', 'TenDuong': 'inline label - visible with data', 'Huyen': 'header label - visible with data', 'LoaiDuong': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Code': 'hidden field', 'TenDuong_BGD': 'inline label - always visible', 'DiemDau': 'inline label - always visible', 'DiemCuoi': 'inline label - always visible', 'STTDoan': 'hidden field', });
lyr_a00000050RanhHC_Xa_Polyline_3.set('fieldLabels', {'OBJECTID': 'no label', 'MaNhanDang': 'no label', 'Shape_Leng': 'no label', 'GhiChu': 'no label', 'DonViQuanLy': 'no label', 'DonViCapNhat': 'no label', 'MaDoiTuong': 'no label', 'MaDonViHanhChinh': 'no label', 'DanhTuChung': 'no label', 'DiaDanh': 'no label', 'DoiTuong': 'no label', 'NgayThuNhan': 'no label', 'NgayCapNhat': 'no label', 'DienTich': 'no label', 'TenXa': 'no label', 'TenHuyen': 'no label', 'CheckTool': 'no label', 'MaPhuongXa': 'no label', 'MaHuyenTP': 'no label', 'SHAPE_Length': 'no label', });
lyr_a00000050RanhHC_Xa_Polyline_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});