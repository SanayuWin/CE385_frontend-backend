import { useEffect, useState } from "react";
import { Box, Card, Text } from "@radix-ui/themes";
import { getCategories } from "@/services/category.service";
import { TypeCategoriesAll } from "@/types/response/response.category";

export default function CategoriesFeature() {
    const [categories, setCategories] = useState<TypeCategoriesAll[]>([]);
    const getCategoriesData = () => {
        getCategories().then((res) => {
            console.log(res);
            setCategories(res.responseObject);      
        })
    }
    useEffect(() => {
        getCategoriesData();
    }, []);


    return (
        <div className="container w-full pt-2">
            <Box maxWidth="350px">
                <Card asChild>
                    <a href="#">
                        <Text as="div" size="2" weight="bold">
                            Quick start
                        </Text>
                        <Text as="div" color="gray" size="2">
                            Start building your next project in minutes
                        </Text>
                    </a>
                </Card>
            </Box>
        </div>
    );
}